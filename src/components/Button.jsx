/* eslint-disable react/prop-types */
export default function Button(props){

    return (
        <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md" >{props.text}</div>
    );
}