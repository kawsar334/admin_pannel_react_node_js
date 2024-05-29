import "./message.scss"

const Message = () => {
    return (
        <div className="message">
            <div className="messagewrapper ">
                <div className="msgcontainer incoming ">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div className="contents">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt, </p>
                    <span>5 hours ago</span>
                </div>
                </div>
                <div className="msgcontainer ">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt, quidem voluptatum nobis officiis ullam dolore aliquid vero vitae iusto!</p>
                        <span>5 hours ago</span>
                    </div>
                </div>
                <div className="msgcontainer incoming ">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt, </p>
                        <span>5 hours ago</span>
                    </div>
                </div>
                <div className="msgcontainer">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio debitis omnis, asperiores impedit assumenda molestias, pariatur totam deserunt consequuntur enim doloremque? Illum omnis doloribus soluta enim cum. Perferendis inventore, aut labore laborum ratione animi eligendi dolorum! Consequuntur exercitationem a illo reiciendis quibusdam maiores animi alias eos, maxime disti. </p>
                        <span>5 hours ago</span>
                    </div>
                </div>
                <div className="msgcontainer incoming ">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt, </p>
                        <span>5 hours ago</span>
                    </div>
                </div>
                <div className="msgcontainer  ">
                    <div className="imgcontainer"><img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className="contents">
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga numquam nihil dolores maxime ducimus sunt consequuntur exercitationem temporibus voluptas eveniet? </p>
                        <span>5 hours ago</span>
                    </div>
                </div>

            </div>
                <div className="inputcontainer">
                    <input type="text" placeholder="Enter Your message" />
                    <button>send</button>
                </div>
        </div>
    )
}

export default Message