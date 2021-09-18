import { withRouter } from 'next/router'
import TextInput from 'components/Forms/TextInput'
import Select from 'components/Forms/Select'
import ContainerFluid from 'components/Layouts/ContainerFluid'

function Page({ router }) {
  const registerUser = (e) => {
    e.preventDefault()
  }

  const option = [
    { id: 'hahaha', value: 'HOHOHO', label: 'aaa' },
    { id: 'hahaha', value: 'HOHOHO', label: 'bbb' },
    { id: 'hahaha', value: 'HOHOHO', label: 'ccc' },
    { id: 'hahaha', value: 'HOHOHO', label: 'ddd' },
  ]

  return (
    <ContainerFluid>
      <h1>{router.pathname}</h1>
      <article className="pt-10">
        <h1 className="text-4xl mb-8">Forms</h1>
        <div>
          <TextInput label="테스트 테스트" type="text" placeholder="와우"></TextInput>
          <div className="error">
            <TextInput label="테스트 테스트" type="text" placeholder="와우"></TextInput>
          </div>

          <div className="grid grid-cols-12 gap-4 place-items-center">
            <div className="col-span-3 w-full">
              <label htmlFor="">하하ㅏ하하</label>
            </div>
            <div className="col-span-9 w-full">
              <div className="form-control">
                <input type="text" />
              </div>
            </div>
          </div>

          <Select label="선택하세요" value="a1" id="hahaha" options={option} />
        </div>
      </article>
    </ContainerFluid>
  )
}

export default withRouter(Page)
