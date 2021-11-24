import styles from "../styles/EOM.module.css";
import {Toolbar} from '../components/toolbar';


export const EOM = ({employee}) => {
return (
    <div className = 'page-container'>
         <Toolbar />
<div className = {styles.main} >
    <h1>
        Employee of the Month
    </h1>
    <div className= {styles.employeeOfTheMonth}>
    <h3>Jake Linn </h3>
        <h6>
            Web Developer
        </h6>
        <img src = 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/220474899_10219240668359708_6506217596991231122_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=ySIx_cefzaQAX8BUK3B&_nc_ht=scontent-ort2-2.xx&oh=e0716864535f0d1de55143fd55c1e08d&oe=61A14D1B' alt ='employee'/>
<p> Project made with Next.js </p>
    </div>
</div>
    </div>
)

}
// export const getServerSideProps = async pageContext => {
// const apiResponse = await fetch(
//     'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
// );
// const employee = await apiResponse.json();
// return {
//     props: {
//         employee: employee 
//     }
// }


export default EOM;