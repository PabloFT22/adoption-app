import samAndPablo from "../IMG_3382.jpg"

function About() {
    return(
    <div>
        <h2 className="about">Hi,to all our fellow Paws-People. Our mission here is to create an environment for lost dogs to find their forever homes.
            the idea of this team project was inspired by the mass amounts of dogs that are left on the streets to starve and even worse. Statistically
            there are 1.3 Million stray dogs in the US alone and our goal is to reduce those numbers the best we can. we have high hopes that we can acheive 
            these goals with your help! social media is such a powerful tool and we are going to utilize that power the best we can. If you would like to donate to
            the cause and our porjet teams you could always find our venmo links here at: 
        </h2>
        <p className="venmo">@Samuel-Gaddis</p>
        <p className="venmo">@Pablo-FuentesTudela</p>
        <div>
            <img
            id="about-dog-pic"
            src={samAndPablo}
            alt="dog that needs to be adopted"
            />
        </div>
    </div>
    )
} 

export default About