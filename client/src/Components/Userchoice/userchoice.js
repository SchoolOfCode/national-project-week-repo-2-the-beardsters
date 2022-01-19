function Userchoice(props) {
return (
    <div>
<form>
    <label htmlFor="frontend">Frontend</label>
    <input type="radio" value="frontend" name="frontend"></input>
    <label htmlFor="backend">Backend</label>
    <input type="radio"></input>
   
</form>
 <button onClick={props.onClick}>Get your challenge</button>
</div>
)
}

export default Userchoice;