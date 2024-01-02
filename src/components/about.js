import img2 from "../img/pexels-yan-krukau-8613059.jpg"
const About=()=>{
    return(
        <div className="p-4">
            <br/>
            <br/>
            <h1 className="text-3xl font-semibold">Pranavi Books is a nonprofit publisher introducing children to the joy of reading.</h1>

            <div className="w-[100%] h-[100%] p-4 flex">
                <img className="w-[40%] h-[40%]" src={img2}/>
                <div className="p-4">

               
            <h2>Every second child in India cannot read at her grade level.1</h2>
            <br/>
            <br/>
<p>This immense reading deficit comes from a variety of reasons, an important one being the dearth of reading material beyond textbooks in school. Without easy access to books in their mother tongue languages, children struggle to learn to read and practise their reading skills.</p>
<br/>
            <br/><p>Since 2004, we have been creating engaging storybooks in multiple languages and formats to help children discover the joy of reading – in languages they can understand, set in locations they can recognise, featuring characters with whom they can identify, and telling stories that capture their attention and fuel their imagination.</p>
            <br/>
            <br/><p>Our books delight and enchant children, taking them on adventures and introducing them to new worlds.</p>
            </div>
            </div>

        </div>
    )
}
export default About