
slideUpCard();


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
        })
        .catch(err => console.error(err))
}

const failure = () => {
    // TODO: Prompt user again with an HTML element popup
}

navigator.geolocation.getCurrentPosition(success, failure);


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

