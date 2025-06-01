import { frameImages, stickerImages } from './Assets';
function Editor() {
    return (
        <div className="editor">
            <div className="polaroid">
                <img src={frameImages.purple} alt="Purple Frame" />
            </div>
            <div className="rightPanel">
                <div className="editBox">
                    <p>FRAME</p>
                    <button>YELLOW</button>
                    <button>GREEN</button>
                    <button>BLUE</button>
                    <button>PURPLE</button>
                    <button>PINK</button>
                    <button>ORANGE</button>

                    <p>STICKERS</p>
                    <button>SPRING</button>
                    <button>SUMMER</button>
                    <button>AUTUMN</button>
                    <button>WINTER</button>

                    <p>FILTER</p>
                    <button>NATURAL</button>
                    <button>BLACK AND WHITE</button>
                    <button>VINTAGE</button>
                </div>
                <button class="download">DOWNLOAD</button>
            </div>    
        </div>
    )
}
export default Editor;