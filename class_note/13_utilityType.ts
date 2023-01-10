// pick
interface Product {
    id: number;
    name: string;
    price : number;
    brand: string;
    stock: number;
}

// function fetchProduct(): Promise<Promise[]> {

// }

interface ProductDetail {
    id: number;
    name: string;
    price: number;
} // 이 코드는 필요가 없다.

type ShoppingItem = Pick<Product, "id" | "name" | "price">
function displayProductDetail(productItem:ShoppingItem) {

}

// Omit
interface AddressBook {
    name : string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
    name : "homeWorking",
    phone: 123123123123,
    company: "my Room"
}

const chingtao: Omit<AddressBook, "address" | "company"> = {
    name : "중국집",
    phone: 555464545346
}

// partial
interface Product {
    id: number
    name: string
    price: number
    brand: string
    stock: number
}

// 1. 상품 목록을 받아오기 위한 API함수
// function fetchData (): Promise<Product[]> {
// }

// 2. 특정 상품의 상세정보를 나타내기 위한 함수
type ShoppingItem_2 = Pick<Product, "id"  | "name" | "price">
function displayProduct(shoppingItem : ShoppingItem_2 ) {

}

interface UpdatePrd {
    id?: number
    name?: string
    price?: number
    brand?: string
    stock?: number
}
type UpdatePrd_partial = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProduct(productItem: UpdatePrd) {}
function updateProduct_1(productItem: UpdatePrd_partial) {}
// 위아래가 전부 같은 동작


// 파셜 구현해보기
interface UserProfile{
    username : string
    email : string;
    profilePhotoUrl : string
}

// interface UserProfileUpdate {
//     username?: string
//     email?: string;
//     profilePhotoUrl?: string
// }

// #1
type UserProfileUpdate = {
    username?:UserProfile["username"];
    email?:UserProfile["email"];
    profilePhotoUrl?:UserProfile["profilePhotoUrl"];
}

// #2 Mapped 타입...
type UserProfileUpdate_2 = {
    [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p]
}
type UserProfileKeys = keyof UserProfile

type UserProfileUpdate_3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4 reality Partial
type Subset<T> = {
    [p in keyof T]?: T[p]
}