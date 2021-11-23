import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const ImageLink = getComponent("ImageLink");
    const proptypes = Object.keys(props).join(",");
    return (
        <div class="row">
            <h2>{props.title}</h2>
            <p>{proptypes}</p>
            <p>ImageLink: {props.imageLink}</p>
            <ImageLink link="link" imgUrl="imgUrl" altText="altText" />
        </div>
    );
}

export default LinkGallery