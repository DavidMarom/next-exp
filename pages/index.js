import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <p>An experimental Next.js project for bold developers</p>
      <br/>
      <b><p>Join us:</p></b>
      <a href="https://discord.gg/u8huvHYEvq" target="_blank">Discord</a>


      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
