function Demo(){
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    const isEven=(number)=>{
        return (number%2 === 0);
    }

    const filterEle=numbers.filter(isEven);
    const even=filterEle.map((item)=>(
<li>{item}</li>
    ))

    const sum=numbers.reduce((previousValue, currentValue, index)=>previousValue+currentValue,0);

    return(
<div>
<h1>Map, Filter and Reduce</h1>
<h2>Array of elements</h2>
            {numbers}
<h2>Even numbers(found using filter) and displayed using map</h2>
            {even}
<h2>Sum of numbers in the array</h2>
            {sum}
</div>
    )
}
export default Demo
