function Apple() {
    return <div>apple</div>
}

function Pear() {
    return <div>pear</div>
}

export default function Main() {
    let fruit
    let isPaid = true

    if(isPaid) fruit = <Apple/>
    else fruit = <Pear/>

    return <div>{fruit}</div>
}