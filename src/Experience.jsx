import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

import Character from './Character/character';
import Overlay from './overlay/Overlay';

const Experience = () => {
    return (
        <>  
            <Overlay />
            <Canvas camera={{position : [2.5,0,2.5], fov: 35}}>
                <Perf position={'top-right'} />
                <CameraControls />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 3, 3]} />
                <Character />
            </Canvas>
        </>
    );
};

export default Experience;
