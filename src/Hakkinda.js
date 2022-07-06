import { Outlet, Link } from 'react-router-dom';

function Hakkinda() {
  return (
    <div>
      <h1>Hakkında</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis dicta accusantium provident vel et delectus illo cum? Praesentium dolores qui aliquam quis quisquam consectetur suscipit alias ea itaque accusantium!</p>
      <p>
        <Link to="/hakkinda/ozgecmis">Özgeçmişe Git</Link>
      </p>
    </div>
  );
}

export default Hakkinda;