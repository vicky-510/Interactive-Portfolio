import DashNav from '../DashNav';
// import { BsFillHouseFill} from "react-icons/bs";
import { VscProject} from "react-icons/vsc";
import { RiGitRepositoryCommitsFill, RiAdminFill} from "react-icons/ri";
import { BsRocketTakeoffFill} from "react-icons/bs";



function DashHome({Toggle}) {
  return (
    <div >
     <DashNav  Toggle={Toggle} />

     <div className="container-fluid">
      <div className="row g-3 my-2">
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <VscProject size={40} color='#45aaf2' style={{ marginLeft: '20px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icons'  />

            <h3 className='fs-3 justify-center' style={{ marginLeft: '20px'}} >04</h3>
            <p className='fs-5' style={{ marginLeft: '0px'}}>Projects</p>
            </div>
          </div>

        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <RiGitRepositoryCommitsFill size={44} color='#45aaf2' style={{ marginLeft: '30px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icons'  />

            <h3 className='fs-3 justify-center' style={{ marginLeft: '30px'}} >05</h3>
            <p className='fs-5' style={{ marginLeft: '0px'}}>Repository</p>
            </div>
          </div>

        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <BsRocketTakeoffFill size={41} color='#45aaf2' style={{ marginLeft: '30px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icons'  />

            <h3 className='fs-3 justify-center' style={{ marginLeft: '30px'}} >01</h3>
            <p className='fs-5' style={{ marginLeft: '0px'}}>Deployment</p>
            </div>
          </div>

        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <RiAdminFill size={43} color='#45aaf2' style={{ marginLeft: '4px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icons'  />

            <h3 className='fs-3 justify-center' style={{ marginLeft: '10px'}} >02</h3>
            <p className='fs-5' style={{ marginLeft: '0px'}}>Admin</p>
            </div>
          </div>

        </div>

      </div>
     </div>

    </div>
  )
}

export default DashHome