import Image from "next/image";
import JirayaImage from '../../../public/jiraya.png'
import GirlImage from '../../../public/girl.png'

export const ImageOptimize = () => {
    return (
        <>
            <div style={{ width: "800px", height: "500px", position: "relative" }}>
                <Image src={JirayaImage} alt="jiraya" fill placeholder="blur"/>
            </div>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <Image
                src="https://img3.akspic.ru/previews/2/4/1/1/8/181142/181142-derevo-tiktok-ios-zhivopis-bumaga-x750.jpg"
                alt="derevo"
                priority={true}
                width={400}
                height={800}
            />
            <Image
                src="https://img2.akspic.ru/previews/0/6/4/1/8/181460/181460-noch-vnezemnaya_zhizn-tiktok-kottedzh_m-haus-x750.jpg"
                alt="noch"
                loading={"eager"}
                width={400}
                height={800}
            />
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <h2>Naruto</h2>
            <Image src={GirlImage} alt="girl" placeholder="blur"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <img src="/jiraya.png" alt="jiraya" />
        </>
    )
}
