// @ts-ignore
import React, { useEffect, useState, useRef, Component } from 'react';
import { SearchBox } from '../components/Common/SearchBox';
import SearchGroupItem from '../components/SearchGroupItem';
import { PageDiv } from '../components/Styled/PageDiv';
import { fetchAllGroupList } from '../store/group';

const SearchGroup = () => {

    const [allGroupList, setAllGroupList] = useState([]); 
    const [searchedGroupList, setSearchedGroupList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchAllGroupList().then((res) => {
            console.log(res.data.content);
            setAllGroupList(res.data.content);
        });
    }, []);
    console.log(allGroupList)
    useEffect(() => {
        const filteredGroup = allGroupList.filter((group) => {{
                return group?.name?.includes(searchText);
            }
        });
        setSearchedGroupList(filteredGroup);
    }, [searchText]);

    const onSearch = (e) => {
        setSearchText(document.getElementById('inputvalue')?.value);
    };

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
            onSearch();
        }
    };

    return (
        <PageDiv>
            <SearchBox
                placeholder={'그룹 이름을 입력하세요'}
                onKeyPress={onPressEnter}
                onClick={onSearch}
            />
            {allGroupList.length === 0 ? (
                <div> 표시할 그룹이 없습니다 </div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {allGroupList &&
                        allGroupList.map((group) => (
                            <SearchGroupItem
                                key={group.id}
                                name={group.name}
                                description={group.description}
                                buttontext="탈퇴하기"
                            />
                        ))}
                </div>
            )}
        </PageDiv>
    );
    // @ts-ignore
};

export default SearchGroup;
