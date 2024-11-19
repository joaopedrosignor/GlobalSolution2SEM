export default function HeroSection({titulo, url}){
    return(
        <div className={`h-[100vh] w-full flex justify-center items-center flex-col m-0 p-0`}
            style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(9, 9, 11, 1) 100%), url(${url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            // backgroundBlendMode: "overlay",
            aspectRatio: "16/9"}}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center w-[80%]">{titulo}</h1>
            </div>
    )
}