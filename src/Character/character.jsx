import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Character = (props) => {
    const group = useRef();
    const { scene, animations } = useGLTF('./Assets/Character/bot2.glb'); //loading the model and animations
    const { actions } = useAnimations(animations, group); //getting the actions from the animations

    useEffect(() => {
        const idleAction = actions['idle'];
        idleAction.play();
        idleAction.weight = 1; //this is optional by the way

        const wawingAction = actions['wawing'];
        wawingAction.clampWhenFinished = true; 
        wawingAction.setLoop(THREE.LoopOnce, 1);

        const stanceAction = actions['stance'];
        stanceAction.clampWhenFinished = true;
        stanceAction.setLoop(THREE.LoopOnce, 1);

        //this function is to trigger the wawing animation
        const triggerActionWawing = () => {
            wawingAction.reset().fadeIn(0.5).play();
        };

        //this function is to trigger the stance animation
        const triggerActionStance = () => {
            stanceAction.reset().fadeIn(0.5).play();
        };


        //this function is to handle the keydown event
        const handleKeyDown = (event) => {
            if (event.key === 'w') {
                // idleAction.stop();
                triggerActionWawing();
            }

            if (event.key === 's') {
                triggerActionStance();
            }

            if (event.key === 'i') {
                idleAction.reset().fadeIn(0.5);
                idleAction.play();
            }
        };

        //adding the event listener
        window.addEventListener('keydown', handleKeyDown);

        //cleaning up
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            idleAction.fadeOut(0.5).stop();
            wawingAction.fadeOut(0.5).stop();
            stanceAction.fadeOut(0.5).stop();
        };
    }, [actions]);
    return (
        <group {...props} position={[0, -1, 0]}>
            <group ref={group} dispose={null}>
                <primitive object={scene} />
            </group>
        </group>
    );
};
useGLTF.preload('./Assets/Character/bot2.glb');

export default Character;
