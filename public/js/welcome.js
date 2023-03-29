
slideUpCard();
let locationPromptContainer = document.querySelector('#location-prompt-container');

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const data = { latitude, longitude }
    fetch('/welcome/saveLocation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(data =>
        {
            console.log(`Successfully saved user's coordinates: Longitude: ${longitude}, Latitude: ${latitude}`);
            locationPromptContainer.classList.remove('opacity-100');
            locationPromptContainer.classList.add('opacity-0');
            locationPromptContainer.classList.add('hidden');
        })
        .catch(err => console.error(err))
    }
    
const failure = (error) => {
    console.log(error.code)
    if (error.code === 1) {
        locationPromptContainer.classList.remove('opacity-0');
        locationPromptContainer.classList.remove('hidden');
        locationPromptContainer.classList.add('opacity-100');
        console.log("CANNOT GET LOCATION")
        
        // TODO: Prompt user again with an HTML element popup
        // Allow them to enter their location through a location API
    }
}

promptLocation();

function promptLocation()
{
    navigator.geolocation.getCurrentPosition(success, failure);
}


function slideUpCard()
{
    document.addEventListener('DOMContentLoaded', function ()
    {
        setTimeout(function ()
        {
            document.getElementById("welcome-card").classList.add('slide-up');
        }, 100);
    });
}

