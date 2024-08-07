import './App.css'
import Product from './Components/product'
import Sale from './Components/sale'
import Layout from './Layout/layout'

function App() {
  let products = [
    {
      id: 1,
      img: '/productImg/1.png',
      title: 'Для эфирных масел',
    },
    {
      id: 2,
      img: '/productImg/2.png',
      title: 'Для гидролатов',
    },
    {
      id: 3,
      img: '/productImg/3.png',
      title: 'Медная посуда',
    },
    {
      id: 4,
      img: '/productImg/4.png',
      title: 'Аксессуары из меди',
    },
    {
      id: 5,
      img: '/productImg/5.png',
      title: 'Индивидуальный заказ',
    },
    {
      id: 6,
      img: '/productImg/6.png',
      title: 'Скидки и предложения',
    },
  ]
  let sales = [
    {
      id: 1,
      img: '/sale/Mask Group.png',
      like: '/sale/like.png',
      title: 'Медный чайник с фарфоровой ручкой',
      price: '1953 грн'
    },
    {
      id: 2,
      img: '/sale/Mask Group (1).png',
      like: '/sale/like.png',
      title: 'Медный чайник с фарфоровой ручкой',
      price: '1953 грн'
    },
    {
      id: 3,
      img: '/sale/Mask Group (2).png',
      like: '/sale/like.png',
      title: 'Медный чайник с фарфоровой ручкой',
      price: '1953 грн'
    }
  ]

  return (
    <Layout>
          <main>
            <h1>Наша продукция</h1>

            <div className="products">
                {products.map(item => <Product item={item} / >)}
            </div>

            <div className="sale">
              <div className="container">
                  <h1>Лучшие продажи</h1>

                  <div className="sale_product">
                    {sales.map(sale => < Sale sale={sale} / >)}
                  </div>
                <div className="buttonCen">
                  <button>Перейти в каталог</button>
                </div>
              </div>
            </div>
            <div className="sales">
              <div className="container">
                  <h1>новинки</h1>

                  <div className="sale_product">
                    {sales.map(sale => < Sale sale={sale} / >)}
                  </div>
                <div className="buttonCen">
                  <button>Перейти в каталог</button>
                </div>
              </div>
            </div>

            <div className="baner">
              <div className="container">
                <h2>1 + 1 = 3</h2>
                <p>Закажите два товара и получите третий бесплатно</p>

                <button>Перейти в каталог</button>
              </div>
            </div>

            <div className="sale">
              <div className="container">
                  <h1>мы рекомендуем</h1>

                  <div className="sale_product">
                    {sales.map(sale => < Sale sale={sale} / >)}
                  </div>
                <div className="buttonCen">
                  <button>Перейти в каталог</button>
                </div>
              </div>
            </div>
            <div className="sales">
              <div className="container">
                  <h1>Скидки</h1>

                  <div className="sale_product">
                    {sales.map(sale => < Sale sale={sale} / >)}
                  </div>
                <div className="buttonCen">
                  <button>Перейти в каталог</button>
                </div>
              </div>
            </div>
          </main>
    </Layout>
  )
}

export default App
