import "./Form.css"
import { useNavigate } from'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';

function Form() {
    window.gtag('event', 'screen_view', {
        'app_name': 'myWebsite',
        'screen_name': 'Form'
    });

    const navigate = useNavigate();

    function submitForm( event ) {
    
        window.addEventListener('beforeunload', function(e) {
            e.preventDefault();
        }, false)

        // form elements
        const inputForm = document.forms[0];
        const firstName = inputForm[0].value;
        const lastName = inputForm[1].value;
        const address = inputForm[2].value;
        const apartment = inputForm[3].value;
        const city = inputForm[4].value;
        const state = inputForm[5].value;
        const zipcode = inputForm[6].value;
        const country = inputForm[7].value;
        const phone = inputForm[8].value;
        const email = inputForm[9].value;

        // https://ads.google.com/aw/conversions/new?ocid=1512184482&ctInfo=BULK_WEBPAGE&source=UNKNOWN_SOURCE&euid=1027629775&__u=2089053975&uscid=1512184482&__c=7995635218&authuser=0&subid=us-en-awhp-g-aw-c-home-signin%21o2-adshp-hv-q4-22
        window.gtag('event', 'conversion', {
            'send_to': 'AW-11403859296/qrH2CN_yjJQZEOCq5L0q',
            'value': 1.0,
            'currency': 'USD',
            'event_callback': window.location.url
        });

        // https://support.google.com/analytics/answer/14171598?sjid=7037691006052267228-NA
        window.gtag('set', 'user_data', {
            "email": email,
            "phone_number": '+1' + inputForm[8].value,
            "address": {
                "first_name": firstName,
                "last_name": lastName,
                "street": address,
                "city": city,
                "region": state,
                "postal_code": zipcode,
                "country": country
            }
        });

        // https://support.google.com/analytics/answer/12370404?sjid=13863370662565750298-NA#zippy=%2Cgoogle-tag-websites
        window.gtag('set', 'user_properties', {
            'favorite_food': 'pizza'
        })
    }

    return (
        <div className="form">
            <YoutubeEmbed embedId="mx8IegqhbZ8"/>
            <h3> Fill out form 1</h3>
            <form id="personal-data-form" className="form__container">
                <div>
                    <label for="firstName"> First Name </label>
                    <input type="text" id="firstName" name="firstName" />
                </div>

                <div>
                    <label for="lastName"> Last Name </label>
                    <input type="text" id="lastName" />
                </div>

                <div>
                    <label for="address"> Home Address </label>
                    <input type="text" id="address" />
                </div>

                <div>
                    <label for="apt"> Apartment number </label>
                    <input type="text" id="apt" />
                </div>

                <div>
                    <label for="city"> City </label>
                    <input type="text" id="city" />
                </div>

                <div>
                    <label for="state"> State </label>
                    <input type="text" id="state" />
                </div>

                <div>
                    <label for="zipcode"> Zipcode </label>
                    <input type="text" id="zipcode" />
                </div>

                <div>
                    <label for="country"> Country </label>
                    <input type="text" id="country" />
                </div>


                <div>
                    <label for="phone"> Phone: </label> 
                    <input type="tel" id="phone" />
                </div>

                <div>
                    <label for="email"> Email </label>
                    <input type="email" id="email" />
                </div>

                <button className="submit__buton" onClick={submitForm}> Submit </button>
                <button className="submit__buton" onClick={ () => navigate( '/')}> Back </button>
            </form>
        </div>
    )
}

export default Form;