import ContactForm from "./contactform";
import HoursList from "./HoursList";

export const metadata = {
  title: "Contact Us | Zoom Autos - Vehicle Transport & Recovery UK",
  metadataBase: new URL("https://zoomautos.co.uk"),
  description:
    "Get in touch with Zoom Autos for vehicle transport, car recovery, or logistics inquiries. Find our UK contact number, email, office address, and working hours.",
  keywords: [
    "Zoom Autos", "contact Zoom Autos", "vehicle transport UK", "car recovery UK",
    "UK car transport inquiries", "vehicle logistics UK",
  ],
  openGraph: {
    title: "Contact Zoom Autos - UK Vehicle Transport & Recovery",
    description: "Reach out to Zoom Autos for professional vehicle transport, nationwide car recovery, and logistics services across the UK.",
    url: "https://zoomautos.co.uk/contactus",
    siteName: "Zoom Autos",
    locale: "en_GB",
    type: "website",
  },
};

const address = "Spaces, The Porter Building, 1 Brunel Way, Slough, SL1 1FQ";
const locationUrl = "https://maps.google.com/?q=The+Porter+Building,+1+Brunel+Way,+Slough,+SL1+1FQ";
const contactNo = "0333 335 6969";
const email = "noreply@zoomautos.co.uk";


export default function ContactPage() {
  return (
    <>
      <h1 style={{ marginTop: '120px' }}>CONTACT US</h1>
      <div className="contact-container">
        <div className="contact-details">
          <div className="info">
            <h2>Address</h2>
            <p>
              <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                {address}
              </a>
            </p>

            <h2>Phone</h2>
            <p><a href={`tel:${contactNo}`}>{contactNo}</a></p>

            <h2>Email</h2>
            <p><a href={`mailto:${email}`}>{email}</a></p>

            <h2>Hours</h2>
            <HoursList />
          </div>

          <ContactForm />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3134.341395444745!2d-0.6392963992500774!3d51.48104417765142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767b7d2acbdb35%3A0x6ebe77a274d46d4a!2sZoom%20Autos%20Ltd!5e0!3m2!1sen!2s!4v1728914130668!5m2!1sen!2s"
            width="800"
            height="600"
            loading="lazy"
            title="Zoom Autos Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}
