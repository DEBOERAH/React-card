
const StudentCard = ({ name, imgurl, about, depColor }) => {

    const style = {
        card: {
            width: '300px',
            height: '400px',
            border: '1px ${depColor || black} solid ',
            border: `1px ${depColor || 'black'} solid`,

            borderRadius: '10px',
            margin: '18px',
            padding: "8px"
        },
        img: {
            width: '250px',
            height: '250px',
        },
        name: {
            color: 'blue',
        }


    }

    return (
        <div style={style.card}>

            <img src={imgurl || "https://images.squarespace-cdn.com/content/v1/61cc66f9e8f1cb7928c32c66/1641286267061-70OTHVZ6FXTYL5SKT67P/animation%2Bart%2B5.jpg"} alt="" style={style.img} />

            <h2 style={style.name}>{name}</h2>
            <p>
                {about}

            </p>



        </div>
    )
}

export default StudentCard

