import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    throw Error(props.children)
    return (
        <div className="flexbox">
            { props.text }
            { props.children && childComponent(props.children) }
        </div>
    )
}

function childComponent(child) {
    const Child = getComponent(child.type)
    return <Child {...child} />
}

export default Flexbox