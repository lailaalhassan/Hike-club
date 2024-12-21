function Tabs(){
    return(
    <><ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
        </li>
        <li className="nav-item" role="presentation">
            <button class="nav-link" id="about us-tab" data-bs-toggle="tab" data-bs-target="#about us" type="button" role="tab" aria-controls="about us" aria-selected="false">About Us</button>
        </li>
        <li className="nav-item" role="presentation">
            <button class="nav-link" id="contact us-tab" data-bs-toggle="tab" data-bs-target="#contact us" type="button" role="tab" aria-controls="contact us" aria-selected="false">Contact Us</button>
        </li>
    </ul><div className="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Welcome to the hiking page</div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="about us-tab">established in 2024</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact us-tab">Telephone number</div>
        </div></>
    )
}

export default Tabs;