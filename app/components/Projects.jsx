import Card from './Card';

export default function Projects() {
  return (
    <section className="flex flex-col items-center gap-20 py-24 px-4 bg-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <Card
        title="Budget Planner Finance App"
        description="With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification."
        image="/images/finance-app.png"
        bgColor="bg-green-100"
        stats={[
          { label: 'Engagement', value: '12 min' },
          { label: 'User Satisfaction', value: '4.5★' },
        ]}
      />

      <Card
        title="Recipe Book App"
        description="A simple and visually appealing Flutter app that showcases a collection of international recipes."
        image="/recipe-app.png"
        bgColor="bg-orange-100"
        buttons={[
          {
            label: 'View Repository',
            onClick: () => window.open('https://github.com/fernandojosecc'),
          },
        ]}
      />

      <Card
        title="Time Tracking Dashboard"
        description="A responsive Flutter dashboard to track time spent across different activities."
        image="/images/time-tracker.png"
        bgColor="bg-purple-100"
        buttons={[
          {
            label: 'View Repository',
            onClick: () => window.open('https://github.com/fernandojosecc'),
          },
          {
            label: 'View Demo',
            onClick: () => window.open('https://demo-url.com'),
          },
        ]}
      />

      <Card
        title="Internet Sharing UI App"
        description="An intuitive app UI for managing internet sharing across devices. Focused on usability and minimal aesthetics."
        image="/images/ui-design.png"
        bgColor="bg-blue-100"
        stats={[
          { label: 'Conversion Rate', value: '20%' },
          { label: 'User Satisfaction', value: '95%' },
        ]}
      />
    </section>
  );
}
