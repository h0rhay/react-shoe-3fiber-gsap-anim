import { useGLTF } from "@react-three/drei";
import { JordanGLTF } from "../typings";

export const JordanShoes = () => {
    const {nodes, materials} = useGLTF("/public/air_jordan_1.glb") as JordanGLTF;
    return <>
    <group scale={10} rotation={[-Math.PI * 0.5, 0, 0]} position={[2,1,-1]}>
        <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} />
        <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace} />
    </group>
    </>;
}
 
