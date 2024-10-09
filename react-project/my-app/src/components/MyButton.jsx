/*
 * @Author: TerryMin
 * @Date: 2024-09-19 17:10:50
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-19 17:11:10
 * @Description: file not
 */
export default function MyButton({ count, onClick }) {
  return <button className="btn btn-primary" onClick={onClick}> Clicked {count} times</button>;
}
