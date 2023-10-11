import Head from "next/head";
import { ClipLoader } from "react-spinners";


export default function Loader({ type = 'default' }) {
    switch (type) {
        case 'spinner':
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#D84C54' }}>
                    <ClipLoader color={'#ffffff'} size={150} />
                </div>
            );
        default:
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000000' }}>
                    <video autoPlay loop muted style={{ width: '60%', height: '100%' }}>
                        <source src={'/question_mark.mp4'} type='video/mp4' />
                        <source src={'/question_mark.webm'} type='video/webm; codecs="vp8, vorbis"' />
                        <source src={'/question_mark.mov'} type='video/mp4' />
                    </video>
                </div >
            );
    }
}