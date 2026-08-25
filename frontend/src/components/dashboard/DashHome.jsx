import { VscProject } from "react-icons/vsc";
import { RiGitRepositoryCommitsFill, RiAdminFill } from "react-icons/ri";
import { BsRocketTakeoffFill } from "react-icons/bs";

const stats = [
  { icon: VscProject, value: '04', label: 'Projects' },
  { icon: RiGitRepositoryCommitsFill, value: '05', label: 'Repository' },
  { icon: BsRocketTakeoffFill, value: '01', label: 'Deployment' },
  { icon: RiAdminFill, value: '02', label: 'Admin' },
];

function DashHome() {
  return (
    <div className="row g-3">
      {stats.map(({ icon: Icon, value, label }) => (
        <div className="col-6 col-md-3" key={label}>
          <div className="dash-stat-card">
            <div className="dash-stat-icon">
              <Icon size={24} />
            </div>
            <h3 className="dash-stat-value">{value}</h3>
            <p className="dash-stat-label">{label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashHome
