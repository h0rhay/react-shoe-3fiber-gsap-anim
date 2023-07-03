import { Canvas } from '@react-three/fiber';
import { JordanShoes } from './JordanShoes';
import { OrbitControls } from '@react-three/drei';

export const CanvasContainer = () => {
    return (
            <Canvas camera={{
				position: [
					4.742922067308307, 2.2387122409413784, 1.2218255872664914,
				],
			}}>
                <ambientLight/>
                <OrbitControls/>
                <JordanShoes/>
            </Canvas>
    );
}
 

