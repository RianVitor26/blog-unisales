import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '../../components/Card';
import { findAllPosts } from '../../services/postsServices';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
          const postsList = await findAllPosts();
          setPosts(postsList);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [user]);

  return (
    <View style={styles.container}>
      <h1>Posts</h1>
      {isLoading ? (
        <p>Carregando posts...</p>
      ) : (
        posts.map((post) => (
          <Card
            key={post.id}
            title={post.titulo}
            description={post.descricao}
            date={post.data}
            author={post.autor}
            photoUrl={post.urlDaFoto}
            category={post.categoria}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eaeaea',
  },
});
