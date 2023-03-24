import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './EaseBreadcrumb.css'
import EaseContainer from './EaseContainer';

function EaseBreadcrumb() {
  var breadCrumbElements = [
    {
      key: 0,
      title: 'Home',
      prevElements: []
    },
    {
      key: 2,
      title: 'Individual',
      prevElements: [
        {
          key: 2,
          title: 'Home',
          prevElements: []
        }
      ]
    }
  ]
  var activeElement = {
    title: 'Offer'
  }
  return (
    <div className='breadcrumb-container'>
      <EaseContainer>
        <Breadcrumb>
          {breadCrumbElements.map((element,index)=>{
              return (<Breadcrumb.Item key={index}>
              <button type="button">{element.title}</button>
              </Breadcrumb.Item>)
            })
          }
          <Breadcrumb.Item active>
            <button type="button">{activeElement.title}</button>
          </Breadcrumb.Item>
        </Breadcrumb>
      </EaseContainer>
    </div>

  );
}

export default EaseBreadcrumb;