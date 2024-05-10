import { useContext, useEffect, useState } from "react"
import { getByAdminAllOwnersRequest, deleteByAdminOwnerRequest } from "../../api/api"
import ListCategories from "@components/ListCategories/ListCategories"
import ListItem from "@components/ListItem/ListItem"
import Pagination from "@components/Pagination/Pagination"
import { UIContext } from "@context/UIContext"
import Loading from "@components/Loading/Loading"

const categories = ["id", "Имя", "Фамилия", "Почта", "Телефон", "Действие"]

const OwnersList = () => {
  const [ownersData, setOwnerData] = useState([])
  const { isLoading, setIsLoading } = useContext(UIContext)

  const [totalItems, setTotalItems] = useState(0)

  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 10,
  })

  useEffect(() => {
    setIsLoading(true)
    getByAdminAllOwnersRequest(params.pageIndex, params.limit)
      .then((res) => {
        if (res.data === null) setOwnerData([])
        else {
          setOwnerData(
            res.data.items.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
          setTotalItems(res.data.totalItems)
        }
      })
      .catch((error) => {
				setOwnerData([])
				console.log(error)
			})
      .finally(setIsLoading(false))
  }, [params])

  const deleteOwnerData = async (ownerId) => {
    setIsLoading(true)
    await deleteByAdminOwnerRequest(ownerId)
    getByAdminAllOwnersRequest(params.pageIndex, params.limit)
      .then((res) => {
        if (!res.data) setOwnerData([])
        else {
          setOwnerData(
            res.data.items.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
          setTotalItems(res.data.totalItems)
        }
      })
      .catch((error) => {
				setOwnerData([])
				console.log(error)
			})
      .finally(setIsLoading(false))
  }

  const getMenuActions = (id) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteOwnerData(id),
      },
    ]
  }

  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex flex-col gap-[20px]">
        <ListCategories categories={categories} />
        {ownersData?.length > 0
          ? ownersData?.map((element, index) => (
              <ListItem
                key={element.id}
                elementData={element}
                menuActions={getMenuActions(element.id)}
                index={index}
              />
            ))
          : ""}
        <Pagination
          totalPage={Math.ceil(totalItems / params.limit)}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </ul>
    </>
  )
}

export default OwnersList
