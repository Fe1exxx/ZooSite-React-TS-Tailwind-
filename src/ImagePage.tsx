import { useState } from "react"

type Bd = {
    id: number
    name: string
    types?: string
    link: string
}

type Animal = 'all' | 'cat'

export default function ImagePage() {

    const [animal, setAnimal] = useState<Animal>('all');
    const [search, setSearch] = useState<string>('')

    const bd: Bd[] = [
        {
            id: 1,
            name: 'Обезьяна',
            link: 'https://avatars.mds.yandex.net/i?id=bd919a6aec583a5df2a3aa4418131c39_l-4569097-images-thumbs&n=13'
        },
        {
            id: 2,
            name: 'Ёжик',
            link: 'https://avatars.mds.yandex.net/i?id=b95fa7012e5935cee83ef745889ae09f_l-9182408-images-thumbs&n=13'
        },
        {
            id: 3,
            name: 'Котик',
            types: 'cat',
            link: 'https://otvet.imgsmail.ru/download/93b8a342382b9770eb6260df06b81340_i-15381.jpg'
        },
        {
            id: 4,
            name: 'Черепаха',
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg/1200px-Testudo_horsfieldii%3B_Baikonur_001.jpg'
        },
        {
            id: 5,
            name: 'Тигр',
            types: 'cat',
            link: 'https://avatars.mds.yandex.net/i?id=b9331dc0217561500b94d4f7dada2357_l-9066790-images-thumbs&n=13'
        },
        {
            id: 6,
            name: 'Два белых тигра',
            types: 'cat',
            link: 'https://cs8.pikabu.ru/post_img/2016/09/28/7/og_og_147506151225418488.jpg'
        },
        {
            id: 7,
            name: 'Лось',
            link: 'https://i.pinimg.com/originals/eb/ac/ef/ebacef356d1ba5cebd26a59e7c1fd6df.jpg'
        },
        {
            id: 8,
            name: 'Лошадь',
            link: 'https://i.pinimg.com/originals/d2/ff/d3/d2ffd34b61cc60f3e77d4bcdf44fc856.jpg'
        },
        {
            id: 9,
            name: 'Кот',
            types: 'cat',
            link: 'https://cdn.profile.ru/wp-content/uploads/2021/04/koshka-zloi-vzlyad.jpg'
        }
    ]

    const filteredAndSearched = bd
        .filter(el => {
            // фильтр по типу
            if (animal === 'all') return true;
            if (animal === 'cat') return el.types === 'cat';
            return false;
        })
        .filter(el => {
            // поиск
            if (!search) return true;
            const query = search.trim().toLowerCase();
            return (
                String(el.id).includes(query) ||
                el.name.toLowerCase().includes(query)
            );
        });

    return (
        <>
            <button onClick={() => setAnimal('all')} className="mt-20 border ml-5 rounded p-2">Все животные</button>
            <button onClick={() => setAnimal('cat')} className="mt-20 border ml-5 rounded p-2">Кошки</button>
            <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Найти животное" className="border-b text-center float-right mt-20 mr-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center gap-3 flex-wrap max-w-400 m-auto p-4">
                {
                    filteredAndSearched.map(el => (
                        <div key={el.id} className="border m-auto w-70 h-94 rounded-2xl md:w-60">
                            <p className="float-right mr-5 mt-2">{el.id}</p>
                            <img src={el.link} alt={el.name} className="mt-11 h-60 w-70" loading="lazy" />
                            <p className="text-center text-3xl mt-4">{el.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}