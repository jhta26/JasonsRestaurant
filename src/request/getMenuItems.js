
export default function getMenuItems(){
	return fetch('/menu-items/data/menu-items.json').then(response =>
		response.json()
		)
}
