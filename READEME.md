# 진행사항

Header 컴포넌트, Main컴포넌트, Footer컴포넌트로 크게 나눔.

Header 컴포넌트에 Search 컴포넌트가 렌더링.

Main 컴포넌트에 전체 배경으로 사용할 Rain 컴포넌트 및 데이터를 받아와 출력해줄 MovieList 컴포넌트와 세부 내용을 출력할 Modal 컴포넌트를 렌더링.

Footer 컴포넌트는 단독 사용.

# 고민하고 있는 것

fetch함수를 이용해서 불러올 데이터를 어떤 컴포넌트에 배치해야할지.

Search 컴포넌트 내부에 있는 아래 코드를 어떻게 처리해야하는지. (fetch함수가 사용되는 컴포넌트에 같이 있어야하는지.)
```
  const search = async e => {
    const searchInput = document.querySelector('.search-input')
    if (e.key === 'Enter') {
      const searchVal = searchInput.value
      if (searchVal.trim() === '') {
        setInfo('검색어를 입력해주세요.')
        return
      }
      remove()
    }
  }
  ``` 
# 위 내용들에 대해 생각한 부분

fetch함수를 App 컴포넌트에서 실행해서 하위 컴포넌트로 props를 전달해주는 것.

App 컴포넌트가 아닌 독립적으로 FetchMovies 컴포넌트를 생성했을 때에 어떻게 전달해줘야하는지.
