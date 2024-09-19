/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:58:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-19 17:04:06
 * @Description: file not
 */
const user = {
  name: "Hedy Lamarrs",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
