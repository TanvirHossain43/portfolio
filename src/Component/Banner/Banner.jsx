import { useEffect, useState } from 'react';
import tanvir from '../../assets/Tanvir.png'
import './Banner.css'
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["MERN Stack Developer", "web Developer", "Front-end Developer", "Javascript Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(1000)
    const period = 3000;
    const intervalAfterFullText = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText;

        if (isDeleting) {
            updatedText = fullText.substring(0, text.length - 1);
            setDelta(period / fullText.length); // Adjust the delta based on the text length
        } else {
            updatedText = fullText.substring(0, text.length + 1);
            setDelta(period / fullText.length); // Adjust the delta based on the text length
        }

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(intervalAfterFullText); // Set an interval after writing the full text
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(period / fullText.length); // Adjust the delta based on the text length for deletion
        }
    };

    return (
        <section className="md:flex lg:flex banner-background h-screen gap-y-5">
            <div className='w-1/2 mt-40 pl-20'>
                <h2 className='text-6xl'>{`Hi,I am Tanvir `}<span>|{text}</span></h2>
            </div>
            <div className='w-1/2 mt-20 '>
                <img src={tanvir} alt="" />
            </div>

        </section>
    );
};

export default Banner;