import Card from "../global/Card";

const cards = [
  {
    title: "Emergency Cases",
    content: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
  },
  {
    title: "Doctors Timetable",
    content: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
  },
  {
    title: "Opening Hours",
    content: '<ul class="opening-hours-list"><li>Monday - Friday <span>8.00-20.00</span></li><li>Saturday <span>9.00-18.30</span></li><li>Sunday <span>9.00-15.00</span></li></ul>'
  }
];

const InfoCards = () => {
  return (
    <div className="info-cards">
      <div className="container">
        <div className="info-cards-inner relative transform lg:-translate-y-1/2 translate-y-0">
          <div className="grid lg:grid-cols-3 grig-cols-1 gap-x-6">
            {cards.map((card, index) => (
              <Card key={index} primary title={card.title} className="transform hover:-translate-y-2 transition ease-in-out duration-500">
                {card.title === "Opening Hours" ? (
                  <div dangerouslySetInnerHTML={{ __html: card.content }} />
                ) : (
                  <div className="text-primarytext text-sm">{card.content}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>  
    </div>
  );
}

export default InfoCards;
