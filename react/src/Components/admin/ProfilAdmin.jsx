
const ProfilAdmin = () => {
  const user =JSON.parse(localStorage.getItem('user'))
  return (
    <div>

      <div className="bg-white rounded-lg shadow-md p-6">
       <h2 className="text-xl font-semibold"> vos information : </h2>
       <div className="text-gray-600 mt-2">
        nom :{user.name} <br />
        email :{user.email} <br />
    </div>
</div>

    </div>
  )
}

export default ProfilAdmin
