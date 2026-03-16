import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import BlogCard from '../BlogCard';
import type { Props } from './types';
import { imageScaleReveal, staggerContainer } from '../../../../animation';

export default function BlogGrid({ posts }: Props): JSX.Element {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{ padding: '40px 0' }}
    >
      <Row gutter={[32, 48]}>
        {posts.map(post => (
          <Col key={post.id} xs={24} sm={12} lg={8}>
            <motion.div variants={imageScaleReveal}>
              <BlogCard post={post} />
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}
