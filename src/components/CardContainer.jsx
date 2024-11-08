export default function CardContainer({titulo, children}) {
    return(
        <>
        <div className="mx-5 my-5">
            <h1 className="pb-2">{titulo}</h1>
            <div className="flex flex-wrap justify-between">
                {children}
            </div>
        </div>
        </>
    )
}