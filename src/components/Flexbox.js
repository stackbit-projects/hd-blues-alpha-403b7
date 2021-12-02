import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    console.warn("!!!", props)
    return (
        <div className="flexbox">
            { props.text }
            { props.children && childComponent(props.children) }
        </div>
    )
}

function childComponents(children) {
    return children.map((child, index) => ({
        const Child = getComponent(child.type);
        return <Child key={index} {...child} />    
    })

}

export default Flexbox