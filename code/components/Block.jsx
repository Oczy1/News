export default function Block(props) {
    const title = props.title ?? 'Новое предложение'
    const subtitle = props.subtitle ?? `Ber hitär innan infranar. Multigt arade. Bede ogt.
    Monolosk etnotos i vagt. Kol os så operadiktisk. Sogt.
    Ohunas. Ultrar aniledes. Kompetensutvisning nöligt`
    const date = props.date ?? 'дата публикации 2.11.2022'
    return (
        <>
            <div className="block">
                <div className="block__title">
                    <h2>{title}</h2>
                </div>
                <div className="block__subtitle">
                    <p>{subtitle}</p>
                </div>
                <div className="block__date">
                    <span>{date}</span>
                </div>
            </div>
        </>
    )
}