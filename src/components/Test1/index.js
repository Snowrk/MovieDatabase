import {Component} from 'react'
import API_KEY from '../../api'

class Test1 extends Component{
  state={}
  componentDidMount() {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      const response = await fetch(url)
      const data = await response.json()
      setState({movies: data})
      console.log(data)
    }

    getData()
  }
  render(){
    return <p>Test</p>
  }
}

export default Test1
