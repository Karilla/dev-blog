import { getDirectories } from '@/utils/filemanager';

export default function Article({article}){

}

export function getStaticProps({params}){
    
}

export function getStaticPaths(){
    const directories = getDirectories('./articles');

    return {
        paths: directories.map(directory =>({
            params: {article: directory}
        })),
        fallback: false
    }
}