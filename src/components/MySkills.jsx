import DynamicProgressBar from "./DynamicProgressBar ";


const MySkills = () => {
  return (
    <div>
      <h1>Skills Progress</h1>
      <DynamicProgressBar htmlProgress={95} cssProgress={90} jsProgress={80} />
    </div>
  );
};

export default MySkills;
