import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '10s',
};

export default function () {
  const res = http.get('http://localhost:3000/users');

  check(res, {
    'status 200': (r) => r.status === 200,
    'tempo < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1);
}