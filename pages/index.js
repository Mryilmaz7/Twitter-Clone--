import Layout from "../components/Layout/layout";
import useWindowSize from "../hooks/UseWindowSize";
import IndexTweet from "../components/IndexTweet/IndexTweet";
import classes from './index.module.css'

const Home =()=>{
const size=useWindowSize()
  return(
      <div>
            <Layout>
                <div className={classes.div}>
                    <IndexTweet/>
                </div>
                <div className={classes.tweet}>

                </div>
            </Layout>

      </div>
  )
}

export default Home